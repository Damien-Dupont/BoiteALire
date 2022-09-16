export interface IAppContext {
  toggleModals: string;
  modalState: string;
}

export interface ISignUp {}
export interface INavbar {
  toggleModals: string;
  currentUser: string;
}

export interface Iinputs {}

export interface IAboutPageProps {
  pathname: string;
  bookID: string;
  author: string;
  title: string;
}
