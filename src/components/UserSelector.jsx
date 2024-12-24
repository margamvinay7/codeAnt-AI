import React from "react";

const UserSelector = React.memo(({ username, onChange, users }) => (
  <div className="py-2 px-4">
    <select
      className="w-full border p-2 rounded"
      value={username}
      onChange={(e) => onChange(e.target.value)}
    >
      {users.map((user) => (
        <option key={user.value} value={user.value}>
          {user.label}
        </option>
      ))}
    </select>
  </div>
));

export default UserSelector;
