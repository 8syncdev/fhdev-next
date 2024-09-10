'use client'
import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface NeonTextProps {
  text: string;
  fontSize?: number;
  color?: string;
  glowColor?: string;
  className?: string;
  maxStars?: number;
  starSize?: number;
  starSpeed?: number;
  randomStarColors?: boolean;
}

const NeonText: React.FC<NeonTextProps> = ({
  text,
  fontSize = 60,
  color = '#fff',
  glowColor = '#00fff2',
  className,
  maxStars = 5000,
  starSize = 2,
  starSpeed = 0.3,
  randomStarColors = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const random = useCallback((min: number, max?: number): number => {
    if (typeof max === 'undefined') {
      max = min;
      min = 0;
    }
    if (min > max) {
      const hold = max;
      max = min;
      min = hold;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  const getStarColor = useCallback(() => {
    if (randomStarColors) {
      const hue = random(0, 360);
      const saturation = random(50, 100);
      const lightness = random(70, 100);
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    } else {
      return '#00fff2'; // Default blue neon color
    }
  }, [random, randomStarColors]);

  const Star = useMemo(() => {
    return class {
      x: number;
      y: number;
      z: number;
      color: string;
      alpha: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.z = Math.random() * 2;
        this.color = getStarColor();
        this.alpha = random(2, 10) / 10;
      }

      update(speed: number) {
        this.z += speed;
        if (this.z > 1) {
          this.z = 0;
          if (randomStarColors) {
            this.color = getStarColor();
          }
        }
        const twinkle = random(10);
        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = (1 - this.z) * 2;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha * (1 - this.z);
        ctx.beginPath();
        ctx.arc(this.x, this.y, starSize * scale, 0, 2 * Math.PI);
        ctx.fill();
      }
    };
  }, [starSize, getStarColor, random, randomStarColors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId: number;

    const setCanvasSize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const createTextPath = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = color;
      ctx.fillText(text, width / 2, height / 2);
      
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 10;
      ctx.fillText(text, width / 2, height / 2);
      
      return ctx.getImageData(0, 0, width, height);
    };

    const textImageData = createTextPath();
    const stars: InstanceType<typeof Star>[] = [];

    for (let x = 0; x < width; x += 4) {
      for (let y = 0; y < height; y += 4) {
        const i = (y * width + x) * 4;
        if (textImageData.data[i + 3] > 128 && stars.length < maxStars) {
          stars.push(new Star(x, y));
        }
      }
    }

    const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 2);
    gradient.addColorStop(0, 'rgba(16, 14, 23, 0.8)');
    gradient.addColorStop(1, 'rgba(16, 14, 23, 0.5)');

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < stars.length; i++) {
        stars[i].update(starSpeed * 0.01);
        stars[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasSize();
    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, fontSize, color, glowColor, maxStars, Star, starSpeed, randomStarColors]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('fixed top-0 left-0 w-full h-full', className)}
      style={{ zIndex: 10 }}
    />
  );
};

export default React.memo(NeonText);
