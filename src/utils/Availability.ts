export interface TimeSlot {
    day: string;
    start: string;
    end: string;
  }
  
  export function parseTimeRange(input: string): TimeSlot {
    const [day, range] = input.split(" ");
    const [start, end] = range.split("-");
    return { day, start, end };
  }
  
  export function generateAllSlots(): string[] {
    const times: string[] = [];
    for (let h = 9; h < 18; h++) {
      times.push(`${h.toString().padStart(2, "0")}:00`);
      times.push(`${h.toString().padStart(2, "0")}:30`);
    }
    return times;
  }