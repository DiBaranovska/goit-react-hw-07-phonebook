import Form from './form/form';
import Filter from './filter/filter';
import Contacts from './contacts/contacts';

const App = () => {

  return (
    <div
      style={{
        marginLeft: '20px',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter/>
      <Contacts/>
    </div>
  );
};

export default App;
