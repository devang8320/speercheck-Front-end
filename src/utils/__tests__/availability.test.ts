import { describe, it, expect } from 'vitest';
import { parseTimeRange } from '../Availability';

describe("parseTimeRange", () => {
  it("should correctly parse day and time", () => {
    const input = "Tuesday 14:00-17:00";
    const result = parseTimeRange(input);
    expect(result).toEqual({
      day: "Tuesday",
      start: "14:00",
      end: "17:00"
    });
  });
});