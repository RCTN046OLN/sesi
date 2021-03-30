import { Component } from "react";
import PropTypes from "prop-types";

class UserList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>
              {user.name}{" "}
              <button onClick={() => this.props.onSelect(user.name)}>
                Pilih
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  title: PropTypes.string,
  users: PropTypes.array,
  onSelect: PropTypes.func,
};

export default UserList;
