import { readContacts } from '../utils/readContacts';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Помилка!', error.message);
    return 0;
  }
};

console.log(await countContacts());
