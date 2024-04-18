import children_ageSelection from "./assets/main__ageSelection.svg"

function Asides() {
  return (
    <main>
      <div className="main_text">
        

        <p className="main_p">Все программы обучения</p>


      <div className="age_selection">
        
        <button className="age_btn">
            <img src={children_ageSelection} alt="" />

            <div>
            <p className="age_btn_p"><b>Дети </b></p>
            
            <p>8 — 14 лет</p>
            </div>

        </button>

        <button className="age_btn">
            <img src={children_ageSelection} alt="" />

            <div>
            <p className="age_btn_p"><b>Дети </b></p>
            
            <p>8 — 14 лет</p>
            </div>

        </button>


        <button className="age_btn">
            <img src={children_ageSelection} alt="" />

            <div>
            <p className="age_btn_p"><b>Дети </b></p>
            
            <p>8 — 14 лет</p>
            </div>

        </button>
      </div>

      </div>

    </main>
  );
}

export default Asides;
