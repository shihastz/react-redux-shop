import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/userAction";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  return (
    <div>
        <hr/>
      <h2>Users</h2>
      {userData.loading ? (
        <h3>Loading...</h3>
      ) : userData.error ? (
        <h3>{userData.error}</h3>
      ) : (
        <div>
          {userData &&
            userData.users &&
            userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
      )}
    </div>
  );
}

//to access state
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

//to dispatch action
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
