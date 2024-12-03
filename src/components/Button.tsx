interface ButtonProps {
    buttonText: string;
  }
  
  export default function Button({ buttonText }: ButtonProps) {
    return (
      <div>
        <button className="mt-4 py-2 px-4 bg-blue-950 font-semibold hover:shadow-blue-200 shadow text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
          {buttonText}
        </button>
      </div>
    );
  }