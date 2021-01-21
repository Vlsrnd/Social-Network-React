import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const [status, setStatus] = useState(props.status);
  const onStatusChange = (e) => setStatus(e.currentTarget.value);

  return (      
  <div>
    { !editMode &&
      <div>
        <span onDoubleClick={() => activateEditMode()}>{props.status || '---'}</span>
      </div>
    }
    {editMode &&
      <div>
        <input onBlur={() => deactivateEditMode()} onChange={onStatusChange} autoFocus={true}
          value={status} />
      </div>
    }
  </div>
  )
}

export default ProfileStatusWithHooks;