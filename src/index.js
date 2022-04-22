import { home } from './home';
import { login } from './login';
import { user } from './user';
import { admin } from './admin';

const content = document.querySelector('#content');

content.appendChild(admin());
