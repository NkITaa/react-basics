import { useState } from "react";

export default function Tutorial4() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isGay: false,
    language: "",
    favDictator: "",
  });

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setFormData((prev) => {
      const { name, value, type } = event.target;
      const { checked } = event.target as HTMLInputElement;
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />

        <textarea
          onChange={handleChange}
          placeholder="Comments"
          name="comments"
          value={formData.comments}
        />

        <br />
        <input
          type="checkbox"
          id="isGay"
          checked={formData.isGay}
          onChange={handleChange}
          name="isGay"
        />
        <label htmlFor="isGay">Are you gay?</label>

        <br />
        <fieldset>
          <legend>Choose your favorite programming language</legend>
          <input
            type="radio"
            name="language"
            value="javascript"
            onChange={handleChange}
          />
          <label htmlFor="javascript">JavaScript</label>
          <br />
          <input
            type="radio"
            name="language"
            value="python"
            onChange={handleChange}
          />
          <label htmlFor="python">Python</label>
          <br />
          <input
            type="radio"
            name="language"
            value="c++"
            onChange={handleChange}
          />
          <label htmlFor="c++">C++</label>
          <br />
        </fieldset>
        <br />
        <select
          id="favDictator"
          name="favDictator"
          value={formData.favDictator}
          onChange={handleChange}
        >
          <option disabled value="">
            -- Choose FavDictator --
          </option>
          <option value="stalin">Stalin</option>
          <option value="mao">Mao</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
