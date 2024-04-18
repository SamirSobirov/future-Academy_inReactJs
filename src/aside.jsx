import children_ageSelection from "./assets/main__ageSelection.svg"

function Asides() {
  return (
    <main>
      <div className="main_text">
        

        <p className="main_p">Все программы обучения</p>


      <div className="age_selection">
        
        <button btn_age_sec>
            <img src={children_ageSelection} alt="" />
            <p><b>Дети</b></p>
        </button>
      </div>

      </div>

    </main>
  );
}

export default Asides;
