import React, { useState } from 'react';
const AddContact = () => {
  const [form, setForm] = useState({ name: '', phone: '', relation: '', notes: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      setLoading(true);
      const session = await account.get();
      const userId = session.$id;

      await databases.createDocument(
        'DATABASE_ID', // replace with your DB ID
        'emergencyContacts', // collection ID
        ID.unique(),
        { ...form, userId }
      );

      alert('Contact saved!');
      setForm({ name: '', phone: '', relation: '', notes: '' });
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('Failed to save contact.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 mt-10 rounded-xl border">
      <h2 className="text-xl font-bold mb-4 text-[#2C2C2C]">Add Emergency Contact</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="w-full mb-3 p-2 border rounded"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="relation"
        placeholder="Relation (e.g. Mother, Friend)"
        className="w-full mb-3 p-2 border rounded"
        value={form.relation}
        onChange={handleChange}
      />
      <textarea
        name="notes"
        placeholder="Notes (optional)"
        className="w-full mb-3 p-2 border rounded"
        value={form.notes}
        onChange={handleChange}
      ></textarea>

      <button
        onClick={handleAdd}
        disabled={loading}
        className="w-full bg-[#FF3B3F] hover:bg-[#e63438] text-white font-semibold py-2 px-4 rounded"
      >
        {loading ? 'Saving...' : 'Save Contact'}
      </button>
    </div>
  );
};

export default AddContact;
