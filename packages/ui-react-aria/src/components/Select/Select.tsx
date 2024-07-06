import React from "react";
import { ChevronsUpDown } from "lucide-react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as BaseSelect,
  SelectValue,
  SelectProps,
  ListBoxItemProps,
  Text,
} from "react-aria-components";

interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, "children"> {
  label?: string;
  description?: string;
  items?: Iterable<T>;
  children: React.ReactNode | (() => React.ReactNode);
}

function Select<T extends Object>({
  label,
  description,
  items,
  children,
  ...props
}: MySelectProps<T>) {
  // Testing x2
  return (
    <BaseSelect className="w-[200px] flex flex-col gap-1" {...props}>
      <Label>{label}</Label>
      <Button className="flex items-center rounded-lg border-0 text-left shadow-md text-slate-900 px-4 py-2 bg-white cursor-default">
        <SelectValue className="flex-1 truncate" />
        <ChevronsUpDown />
      </Button>
      {description && <Text slot="description">{description}</Text>}

      <Popover className="max-h-60 shadow-lg text-base rounded-md w-[--trigger-width] bg-white text-slate-900">
        <ListBox className="outline-none px-2 py-1" items={items}>
          {children}
        </ListBox>
      </Popover>
    </BaseSelect>
  );
}

function MyItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className="group flex items-center gap-2 cursor-default select-none py-2 px-4 outline-none rounded text-slate-900 focus:bg-primary focus:text-white"
    />
  );
}

Select.Item = MyItem;
export default Select;
