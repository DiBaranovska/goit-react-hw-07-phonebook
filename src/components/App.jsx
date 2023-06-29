import Form from './form/form';
import Filter from './filter/filter';
import Contacts from './contacts/contacts';
import css from './appSyle/title.module.css'

const App = () => {

  return (
    <div
      style={{
        marginLeft: '20px',
        alignItems: 'center',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <Form  />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <Contacts/>
    </div>
  );
};

export default App;
