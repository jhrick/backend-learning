import { Entity } from "../../core/Entity";

type GoalProps = {
  expectedDuration: number | string;
  startedAt: number;
  priorityLevel: number;
}

export class Goal extends Entity<GoalProps> {
  private constructor(props: GoalProps) {
    super(props);
  }

  static create(props: GoalProps) {
    const goal = new Goal(props);

    return goal;
  }
}
