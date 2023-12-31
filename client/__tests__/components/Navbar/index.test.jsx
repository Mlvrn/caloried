import { fireEvent, render } from '@utils/testHelper';

import Navbar from '@components/ui/Navbar';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

let wrapper;

const mockUser = {
  id: '1',
  username: 'testuser',
  email: 'test@example.com',
  sex: 'male',
  dob: '1990-01-01',
  height: 180,
  weight: 75,
  goal: 'maintain',
  activityLevel: 3,
};

beforeEach(() => {
  wrapper = render(<Navbar theme="light" user={mockUser} token="mockToken" />);
});

describe('Navbar Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('navbar')).toBeInTheDocument();
  });
  it('should render Logo component', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('logo')).toBeInTheDocument();
  });
  it('should render PrimaryButton component', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('primary-button')).toBeInTheDocument();
  });
  it('should render SecondaryButton component', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('secondary-button')).toBeInTheDocument();
  });
  it('should call navigate to sign up when sign up button is clicked', () => {
    const { getByTestId } = wrapper;
    const button = getByTestId('primary-button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(`/sign-up`);
  });
  it('should call navigate to sign in when sign in button is clicked', () => {
    const { getByTestId } = wrapper;
    const button = getByTestId('secondary-button');
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(`/sign-in`);
  });
  it('should navigate to diary page when clicking on the Logo component', () => {
    const { getByTestId } = wrapper;
    const logo = getByTestId('logo');
    fireEvent.click(logo);
    expect(mockNavigate).toHaveBeenCalledWith(`/diary`);
  });
  it('should match with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
