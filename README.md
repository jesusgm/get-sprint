# getSprint

A function to retrieve a sprint of a date given with the format of **PROJECT-NAME_YY_DD**

# Installation

```
npm install get-sprint
```

# Available parameters

| Param position | Name              | Default value |
| -------------- | ----------------- | ------------- |
| 1st            | Date to calculate | Curent date   |
| 2nd            | Project name      | ""            |
| 3rd            | Sprint weeks      | 2             |
| 4th            | Separator         | "\_"          |

# Use

Get current date sprint

```
const sprint = getSprint();

```

Get sprint of date given with project name

```
const sprint = getSprint(new Date("2021-01-05"), "PROJECT");

```
