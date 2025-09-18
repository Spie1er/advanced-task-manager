import { TaskCardProps } from "./task-card.types";
import dayjs from "dayjs";
import TaskPriorityTag from "./task-priority";
import TaskStatusTag from "./completed-status";
import { SquareCheck, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/common/button";
import { Tooltip } from "@/components/common/tooltip";
import { taskCardContainer } from "./task-card.styles";
import { AddUpdateTaskModal } from "../../add-update-task";

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  completed,
  priority,
  createdAt,
}) => {
  const [hovered, setHovered] = useState(false);

  const [modalOpen, setModalOpen] = useState<string | null>(null);

  return (
    <>
      <div
        key={id}
        className={taskCardContainer()}
        onClick={() => setModalOpen(id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Task Title */}
        <h3 className="text-tusky-peach mb-2 text-lg font-semibold">
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </h3>

        {/* Task Description */}
        <p className="text-tusky-peach/70 mb-3 text-sm">
          {description.length > 80
            ? `${description.substring(0, 80)}...`
            : description}
        </p>

        {/* Badges Row */}
        <div className="mb-3 flex flex-wrap gap-2">
          {/* Priority Badge */}
          <TaskPriorityTag taskPriority={priority} />

          {/* CreatedAt */}
          <span className="bg-tusky-peach/20 text-tusky-peach rounded-md px-2 py-1 text-xs font-medium">
            {dayjs(createdAt).format("MMM D, YYYY")}
          </span>
        </div>

        {/* Status + Actions */}
        <div className="mt-4 flex items-center justify-between">
          <TaskStatusTag completed={completed} />

          <div
            className={`flex items-center gap-2 transition-opacity ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            {!completed && (
              <Tooltip tooltip="Complete Task">
                <Button
                  onClick={() => console.log("Mark complete:", id)}
                  className="rounded-full bg-green-400/10 p-2 text-green-400 transition hover:bg-green-400/20"
                  text={<SquareCheck className="h-4 w-4" />}
                />
              </Tooltip>
            )}

            <Tooltip tooltip="Delete Task">
              <Button
                onClick={() => console.log("Delete this:", id)}
                text={<Trash className="h-4 w-4" />}
                className="rounded-full bg-red-400/10 p-2 text-red-400 transition hover:bg-red-400/20"
              />
            </Tooltip>
          </div>
        </div>
      </div>

      {modalOpen && (
        <AddUpdateTaskModal
          isOpen={!!modalOpen}
          onClose={() => setModalOpen(null)}
          taskId={modalOpen}
        />
      )}
    </>
  );
};
export default TaskCard;
