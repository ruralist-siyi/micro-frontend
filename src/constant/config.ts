import UserList from '../main/page/UserList';

const mainAppConfig = {
  userList: UserList,
};

const subAppConfig = {
  app1: {
    name: 'reactApp',
    entry: '//localhost:8082',
    container: '#sub-content',
  },
};

export { subAppConfig, mainAppConfig };
