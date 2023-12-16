import { Component, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';

class Raindrop {
  public x: number;
  public y: number;
  public length: number;
  public speed: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.length = Math.random() * (canvasHeight / 50) + canvasHeight / 100;
    this.speed = Math.random() * 4 + 1;
  }

  fall(canvasHeight: number) {
    this.y += this.speed;
    if (this.y > canvasHeight) {
      this.y = -this.length;
    }
  }
}

@Component({
  selector: 'app-rain-simulation',
  templateUrl: './rain-simulation.component.html',
  styleUrls: ['./rain-simulation.component.scss']
})
export class RainSimulationComponent implements AfterViewInit, OnChanges {
  @ViewChild('rainCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Input() intensity: number = 100; // Default value for intensity, can be adjusted
  private ctx!: CanvasRenderingContext2D;
  private raindrops: Raindrop[] = [];
  private canvasWidth!: number;
  private canvasHeight!: number;

  ngAfterViewInit(): void {
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.setupCanvas();
    this.createRaindrops();
    this.startAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['intensity'] && changes['intensity'].currentValue !== changes['intensity'].previousValue) {
      this.createRaindrops();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeCanvas();
  }

  private setupCanvas(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.canvas.nativeElement.width = this.canvasWidth;
    this.canvas.nativeElement.height = this.canvasHeight;
  }

  private resizeCanvas(): void {
    this.canvasWidth = window.innerWidth;
    this.canvasHeight = window.innerHeight;
    this.setupCanvas();
    this.createRaindrops(); // Recreate raindrops for new dimensions
  }

  private createRaindrops(): void {
    this.raindrops = [];
    for (let i = 0; i < this.intensity; i++) {
      this.raindrops.push(new Raindrop(this.canvasWidth, this.canvasHeight));
    }
  }

  private startAnimation(): void {
    requestAnimationFrame(() => this.animate());
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    for (const raindrop of this.raindrops) {
      raindrop.fall(this.canvasHeight);
      this.drawRaindrop(raindrop);
    }
    requestAnimationFrame(() => this.animate());
  }

  private drawRaindrop(raindrop: Raindrop): void {
    this.ctx.beginPath();
    this.ctx.moveTo(raindrop.x, raindrop.y);
    this.ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
    this.ctx.strokeStyle = '#9ec9f5';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  }
}



