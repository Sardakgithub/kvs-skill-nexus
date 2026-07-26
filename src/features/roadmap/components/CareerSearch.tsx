"use client";

import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function CareerSearch({
  value,
  onChange,
}: Props) {
  return (
    <Input
      placeholder="Search careers..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-8"
    />
  );
}