import UserList from '../main/page/UserList';

export interface MainAppConfigType {
  [key: string]: any;
}

export interface AppConfigType {
  name: string;
  entry: string;
  container: string;
  [key: string]: any;
}

export interface SubAppConfigType {
  [key: string]: AppConfigType
}

const mainAppConfig: MainAppConfigType = {
  userList: UserList
};

const subAppConfig: SubAppConfigType = {
  app1: {
    name: 'app1',
    entry: '//47.98.40.154:8082',
    container: '#sub-content',
  },
  app2: {
    name: 'app2',
    entry: '//47.98.40.154:8083',
    container: '#sub-content'
  }
};

const persistentApps: Array<string> = ['persistentApp'];

export { subAppConfig, mainAppConfig, persistentApps };
