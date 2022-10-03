import Header from '../components/header';
import Footer from '../components/footer';
import { Main } from './styles/sharedStyle';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </div>
    );
}