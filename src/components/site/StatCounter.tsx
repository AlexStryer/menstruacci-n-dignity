import { useCountUp } from "@/hooks/use-count-up";

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label?: string;
}) {
  const { ref, val } = useCountUp(value);
  return (
    <span ref={ref} aria-label={label}>
      {prefix}
      {val.toLocaleString("es-MX")}
      {suffix}
    </span>
  );
}
