import React from 'react'
import { cn } from '@/lib/utils';

interface ActiveStatusProps{
  activeStatus ?: 'online' | 'away' | 'unavailable' | 'none';
  className ?: string;
}


const ActiveStatus = ({activeStatus = 'online', className = ''}:ActiveStatusProps) => {
  const validStatuses: ActiveStatusProps['activeStatus'][] = ['online', 'away', 'unavailable', 'none'];
  
  // Default to 'online' if the provided status is invalid
  const status = validStatuses.includes(activeStatus) ? activeStatus : 'online';

  const statusColors: Record<string, string> = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    unavailable: 'bg-red-500',
    none: ''
  };
  
  return (
    <div 
      data-testid='active-status' 
      className={cn(`
        absolute bottom-0 right-0 flex items-center justify-center  
        ${statusColors[status]} text-white font-medium text-sm rounded-full
        w-4 h-4 z-0 shadow-md ${className}
      `)}
    >
    </div>
  )
}

export default ActiveStatus;