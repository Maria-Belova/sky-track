import { MoreHorizontal, Route, Share, Target } from 'lucide-react';
import type { IFlightAction } from './flight-actions.types';

export const FLIGHT_ACTIONS: IFlightAction[] = [
  { label: 'Route', icon: Route },
  { label: 'Follow', icon: Target },
  { label: 'Share', icon: Share },
  { label: 'More', icon: MoreHorizontal },
];
