
export class RotatingBuffer {
    private buffer: Int16Array = null;
    private current: number = null;
    private length: number = null;
    private filled: boolean = false;

    constructor(_size: number) {
        this.length = _size;
        this.buffer = new Int16Array(this.length);
        this.current = 0;
    }

    public addData(a: Uint8Array): void {
        var d = new Int16Array(a.buffer);
        if (this.current + d.length < this.length) {
            this.buffer.set(d, this.current);
            this.current += d.length;
            return;
        }

        this.filled = true;
        let b1 = d.subarray(0, this.length - this.current);
        let b2 = d.subarray(this.length - this.current,d.length);
        this.buffer.set(b1, this.current);
        this.buffer.set(b2, 0);
        this.current = b2.length;
    }

    public getData(): Int16Array {
        if (this.filled) {
            let res: Int16Array = new Int16Array(this.length);
            let b1 = this.buffer.subarray(this.current, this.buffer.length);
            let b2 = this.buffer.subarray(0, this.current); 
            res.set(b1, 0);
            res.set(b2, b1.length);
            return res;
        }

        let res: Int16Array = new Int16Array(this.current);
        res.set(this.buffer.subarray(0,this.current));
        return res;
    }
} 