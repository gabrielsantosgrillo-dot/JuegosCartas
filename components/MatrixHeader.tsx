
import React, { useEffect, useRef } from 'react';

interface MatrixHeaderProps {
  theme?: 'GAMES' | 'PROFESSIONAL';
}

const MatrixHeader: React.FC<MatrixHeaderProps> = ({ theme = 'GAMES' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isProfessional = theme === 'PROFESSIONAL';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar dimensiones
    canvas.width = window.innerWidth;
    canvas.height = 180;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    function textToBinary(text: string) {
      return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
      }).join('  ');
    }

    const gabrielBinary = textToBinary("GABRIEL");
    const santosBinary = textToBinary("SANTOS");
    const grilloBinary = textToBinary("GRILLO");

    const gabrielLen = gabrielBinary.length;
    const santosLen = santosBinary.length;
    const grilloLen = grilloBinary.length;

    const namePositions = {
      gabriel: { y: 3, startCol: Math.floor((columns - gabrielLen) / 2), chars: gabrielBinary.split('') },
      santos: { y: 6, startCol: Math.floor((columns - santosLen) / 2), chars: santosBinary.split('') },
      grillo: { y: 9, startCol: Math.floor((columns - grilloLen) / 2), chars: grilloBinary.split('') }
    };

    const drops: number[] = [];
    let specialDrops: any[] = [];
    let fixedChars: any[] = [];
    let eraserDrops: any[] = [];
    let allCharsFixed = false;
    let allCharsFixedTime = 0;
    let allCharsErased = false;
    let animationTime = 0;
    let cycleStartTime = 0;

    // Colores según tema
    const rainColor = isProfessional ? '#06b6d4' : '#00ff00'; // Cian vs Verde
    const highlightColor = '#ffffff';
    const bgColor = isProfessional ? 'rgba(15, 23, 42, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const baseBgColor = isProfessional ? '#0f172a' : '#000000';

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const binary = '01';

    function createSpecialDrops() {
      specialDrops = [];
      const allDrops: any[] = [];
      Object.entries(namePositions).forEach(([name, pos]) => {
        pos.chars.forEach((char, index) => {
          allDrops.push({
            char, col: pos.startCol + index, targetY: pos.y,
            currentY: Math.random() * -100 - 50, speed: 0.6 + Math.random() * 0.6,
            startTime: 0, stopped: false, name
          });
        });
      });

      for (let i = allDrops.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allDrops[i], allDrops[j]] = [allDrops[j], allDrops[i]];
      }

      allDrops.forEach((drop, index) => {
        drop.startTime = cycleStartTime + 500 + (index * 80) + Math.random() * 200;
        specialDrops.push(drop);
      });
    }

    function createEraserDrops() {
      eraserDrops = [];
      const allFixedPositions = [...fixedChars];
      for (let i = allFixedPositions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allFixedPositions[i], allFixedPositions[j]] = [allFixedPositions[j], allFixedPositions[i]];
      }
      allFixedPositions.forEach((fc, index) => {
        eraserDrops.push({
          col: fc.col, targetY: fc.y, currentY: -5,
          speed: 0.5 + Math.random() * 0.5, startTime: allCharsFixedTime + 5000 + (index * 60),
          erasing: false, erased: false, targetChar: fc
        });
      });
    }

    function resetCycle() {
      specialDrops = [];
      fixedChars = [];
      eraserDrops = [];
      allCharsFixed = false;
      allCharsFixedTime = 0;
      allCharsErased = false;
      cycleStartTime = animationTime;
      createSpecialDrops();
    }

    createSpecialDrops();

    let animationFrameId: any;

    const draw = () => {
      animationTime += 33;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px monospace';

      if (!allCharsFixed && fixedChars.length === specialDrops.length) {
        allCharsFixed = true;
        allCharsFixedTime = animationTime;
        createEraserDrops();
      }

      fixedChars.forEach(fc => {
        if (!fc.erased && !fc.beingErased) {
          ctx.fillStyle = highlightColor;
          ctx.fillText(fc.char, fc.col * fontSize, fc.y * fontSize);
        } else if (fc.beingErased) {
          ctx.fillStyle = isProfessional ? '#334155' : '#444';
          ctx.fillText(fc.char, fc.col * fontSize, fc.erasingY * fontSize);
        }
      });

      for (let i = 0; i < drops.length; i++) {
        const isSp = specialDrops.some(sd => sd.col === i && !sd.stopped && animationTime >= sd.startTime && Math.abs(sd.currentY - drops[i]) < 5);
        const isEr = eraserDrops.some(ed => ed.col === i && !ed.erased && animationTime >= ed.startTime && Math.abs(ed.currentY - drops[i]) < 5);

        if (!isSp && !isEr) {
          ctx.fillStyle = Math.random() > 0.9 ? highlightColor : rainColor;
          ctx.fillText(binary[Math.floor(Math.random() * 2)], i * fontSize, drops[i] * fontSize);
        }
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }

      specialDrops.forEach(sd => {
        if (animationTime < sd.startTime || sd.stopped) return;
        ctx.fillStyle = highlightColor;
        ctx.fillText(sd.char, sd.col * fontSize, sd.currentY * fontSize);
        sd.currentY += sd.speed;
        if (sd.currentY >= sd.targetY) {
          sd.stopped = true;
          fixedChars.push({ char: sd.char, col: sd.col, y: sd.targetY, erased: false, beingErased: false });
        }
      });

      eraserDrops.forEach(ed => {
        if (animationTime < ed.startTime || ed.erased) return;
        if (!ed.erasing) {
          ctx.fillStyle = isProfessional ? '#3b82f6' : '#f00';
          ctx.fillText(binary[Math.floor(Math.random() * 2)], ed.col * fontSize, ed.currentY * fontSize);
          ed.currentY += ed.speed;
          if (ed.currentY >= ed.targetY) {
            ed.erasing = true;
            ed.targetChar.beingErased = true;
            ed.targetChar.erasingY = ed.targetY;
          }
        } else {
          ed.targetChar.erasingY += ed.speed;
          if (ed.targetChar.erasingY * fontSize > canvas.height) {
            ed.erased = true;
            ed.targetChar.erased = true;
          }
        }
      });

      if (allCharsFixed && !allCharsErased && eraserDrops.length > 0 && eraserDrops.every(ed => ed.erased)) {
        allCharsErased = true;
        setTimeout(resetCycle, 5000);
      }

      animationFrameId = setTimeout(draw, 33);
    };

    draw();

    return () => clearTimeout(animationFrameId);
  }, [theme, isProfessional]);

  return (
    <div className={`w-full flex justify-center overflow-hidden transition-colors duration-700 ${isProfessional ? 'bg-[#0f172a]' : 'bg-black'}`}>
      <canvas ref={canvasRef} className="w-full h-[180px]" />
    </div>
  );
};

export default MatrixHeader;
