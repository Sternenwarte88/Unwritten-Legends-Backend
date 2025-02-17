export interface IUserResponse {
  player: {
    _id: string;
    username: string;
    email: string;
    password: string;
    realmId: string;
    createdAt: string;
  };
}
export default IUserResponse;
