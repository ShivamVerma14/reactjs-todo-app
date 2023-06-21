export const data = [
  {
    id: 1,
    title: "The first task title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscinf elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    completed: false,
    labels: ["study", "work", "entertainment"],
  },
  {
    id: 2,
    title: "The second task title",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscinf elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, set diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet",
    completed: false,
    labels: [],
  },
  {
    id: 3,
    title: "The third task title",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscinf elitr",
    completed: true,
    labels: ["entertainment", "work"],
  },
];

export const labels = ["work", "study", "entertainment", "family"];

export const bgColors = {
  work: "bg-purple-500/10",
  study: "bg-blue-500/10",
  entertainment: "bg-pink-500/10",
  family: "bg-emerald-500/10",
};

export const dotColors = {
  work: "bg-purple-400",
  study: "bg-blue-400",
  entertainment: "bg-pink-400",
  family: "bg-emerald-400",
};

export const borderColor = {
  work: "border-purple-700",
  study: "border-blue-700",
  entertainment: "border-pink-700",
  family: "border-emerald-700",
};

export const options = [
  { value: "work", label: "work" },
  { value: "study", label: "study" },
  { value: "entertainment", label: "entertainment" },
  { value: "family", label: "family" }
];