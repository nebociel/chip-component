import React from 'react';

interface UserChipProps {
  user: {
    id: number;
    name: string;
    email: string;
    image: string;
  };
  onRemove: () => void;
  showDetails?: boolean;
}

const UserChip: React.FC<UserChipProps> = ({
  user,
  onRemove,
  showDetails = true,
}) => {
  return (
    <div className='chip'>
      <img src={user.image} alt={user.name} className='chip-image' />
      <div className='chip-info'>
        <div className='chip-info-name'>{user.name}</div>
        {showDetails && <div className='chip-email'>{user.email}</div>}
      </div>
      <span className='chip-remove' onClick={onRemove}>
        ×
      </span>
    </div>
  );
};

export default UserChip;
