import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { eventGroups } from "@/config/site";
import { set, type EventKey } from "@/lib/utils";

// The event picker shared by the chart and statistics pages. The site's own
// city's events come first.
export function EventSelect({
  value,
  onValueChange,
}: {
  value: EventKey;
  onValueChange: (value: EventKey) => void;
}) {
  return (
    <div>
      <Label htmlFor="event" className="mb-4 block">
        Event
      </Label>
      <Select
        value={value}
        onValueChange={(next) => onValueChange(next as EventKey)}
      >
        <SelectTrigger id="event" className="w-[280px]">
          <SelectValue placeholder="Select an event" />
        </SelectTrigger>
        <SelectContent>
          {eventGroups.map(({ city, events }) => (
            <SelectGroup key={city}>
              <SelectLabel>{city}</SelectLabel>
              {events.map((event) => (
                <SelectItem key={event} value={event}>
                  {set[event]}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
