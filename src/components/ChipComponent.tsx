import axios from 'axios';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import './ChipComponent.css';
import UserChip from './UserChip';

interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}

const ChipComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [showUserList, setShowUserList] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch user data from JSONPlaceholder API
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(
          response.data.map((user) => ({
            ...user,
            image: `https://i.pravatar.cc/150?u=${user.id}`,
          }))
        );
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowUserList(event.target.value !== '');
  };

  const handleInputClick = () => {
    // Show all users when the input box is clicked
    // setUsers(users);
    setShowUserList(true);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Backspace' &&
      inputValue === '' &&
      selectedUsers.length > 0
    ) {
      // Handle backspace to remove the last chip
      const lastSelectedUser = selectedUsers[selectedUsers.length - 1];
      removeChip(lastSelectedUser);
    }
  };

  const handleUserClick = (user: User) => {
    // Add user to selected users and remove from available users
    setSelectedUsers([...selectedUsers, user]);
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
    setInputValue('');
    inputRef.current?.focus();
  };

  const removeChip = (user: User) => {
    // Remove user from selected users and add back to available users
    setSelectedUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
    setUsers([...users, user]);
    inputRef.current?.focus();
  };

  return (
    <div className='chip-component'>
      <h1 className='heading'>Pick Users</h1>
      <div className='chip-list'>
        {selectedUsers.map((user) => (
          <UserChip
            key={user.id}
            user={user}
            onRemove={() => removeChip(user)}
            showDetails={false}
          />
        ))}
      </div>
      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        onKeyDown={handleInputKeyDown}
        placeholder='Search users by name or email...'
      />
      {showUserList && ( // Only render user list when showUserList is true
        <div className='user-list'>
          {users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                user.email.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((user) => (
              <div
                key={user.id}
                className='user'
                onClick={() => handleUserClick(user)}
              >
                <img src={user.image} alt={user.name} className='user-image' />
                <div className='user-info'>
                  <div className='user-info-name'>{user.name}</div>
                  <div className='user-email'>{user.email}</div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ChipComponent;
