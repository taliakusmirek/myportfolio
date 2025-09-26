export class SpringValue {
  private current: number;
  private target: number;
  private velocity: number;
  private stiffness: number;
  private damping: number;

  constructor(initialValue: number, stiffness = 0.1, damping = 0.8) {
    this.current = initialValue;
    this.target = initialValue;
    this.velocity = 0;
    this.stiffness = stiffness;
    this.damping = damping;
  }

  setTarget(value: number) {
    this.target = value;
  }

  update() {
    const force = (this.target - this.current) * this.stiffness;
    this.velocity = this.velocity * this.damping + force;
    this.current += this.velocity;
    return this.current;
  }

  getValue() {
    return this.current;
  }
}
