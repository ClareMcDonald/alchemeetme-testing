import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('profile', () => {
  test('Should render the user profile', async () => {
    render(
      <MemoryRouter>
        <Profile user={user} />
      </MemoryRouter>
    );
    
    const name = await screen.findByText('Vonta');
    const motto = await screen.findByText('Res Non Verba');
    const interestsHeading = await screen.findByText('Interests');
    const avatar = await screen.findByAltText('avatar');
    const headerImg = screen.getByAltText('header')
    const likes = screen.getAllByRole('li');

    expect(name.textContent).toBe('Vonta');
    expect(motto).toBeInTheDocument();
    expect(interestsHeading).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(headerImg).toBeInTheDocument();
    expect((likes).length).toEqual(6);
  });
});
