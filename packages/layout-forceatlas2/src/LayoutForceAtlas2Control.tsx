import React from "react";
import { FA2LayoutSupervisorParameters } from "graphology-layout-forceatlas2/worker";

import { WorkerLayoutControlProps, WorkerLayoutControl } from "@react-sigma/layout-core";
import { useWorkerLayoutForceAtlas2 } from "./useWorkerLayoutForceAtlas2";

/**
 * Properties for `LayoutForceAtlas2Control` component
 */
export type LayoutForceAtlas2ControlProps = Omit<
  WorkerLayoutControlProps<FA2LayoutSupervisorParameters>,
  "layout" | "settings"
> & {
  settings?: FA2LayoutSupervisorParameters;
};

/**
 * @category Component
 */
export const LayoutForceAtlas2Control: React.FC<LayoutForceAtlas2ControlProps> = (
  props: LayoutForceAtlas2ControlProps,
) => {
  const workerLayoutProps = { ...props, settings: props.settings || {}, layout: useWorkerLayoutForceAtlas2 };
  return <WorkerLayoutControl {...workerLayoutProps} />;
};
