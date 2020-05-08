import UserList from '../main/page/UserList';

const mainAppConfig = {
  userList: UserList,
};

const subAppConfig = {
  app1: {
    name: 'app1',
    entry: '//localhost:8082',
    container: '#sub-content',
  },
  app2: {
    name: 'app2',
    entry: '//localhost:8083',
    container: '#sub-content'
  }
};

export { subAppConfig, mainAppConfig };
