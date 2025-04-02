import React, { useState } from 'react';
import "../../styles/home.css";
import Chart1_1 from '../component/Chart1_1.jsx';
import Chart1_2 from '../component/Chart1_2.jsx';
import Chart1_3 from '../component/Chart1_3.jsx';
import Chart1_4 from '../component/Chart1_4.jsx';
import Chart1_5 from '../component/Chart1_5.jsx';
import Chart1_6 from '../component/Chart1_6.jsx';
import Chart2_1 from '../component/Chart2_1.jsx';
import Chart2_2 from '../component/Chart2_2.jsx';
import Chart2_3 from '../component/Chart2_3.jsx';
import Chart2_4 from '../component/Chart2_4.jsx';
import Chart2_5 from '../component/Chart2_5.jsx';
import Chart2_6 from '../component/Chart2_6.jsx';
import Chart3_1 from '../component/Chart3_1.jsx';
import Chart3_2 from '../component/Chart3_2.jsx';
import Chart3_3 from '../component/Chart3_3.jsx';
import Chart3_4 from '../component/Chart3_4.jsx';
import Chart3_5 from '../component/Chart3_5.jsx';
import Chart3_6 from '../component/Chart3_6.jsx';

const DashboardAdminSocioDem = () => {
    const [activeChart, setActiveChart] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowChart = (chart) => {
        setActiveChart(chart);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setActiveChart(null);
    };

    const charts = [
        { component: Chart1_1, label: "Edad" },
        { component: Chart1_2, label: "Chart1_2" },
        { component: Chart1_3, label: "Chart1_3" },
        { component: Chart1_4, label: "Chart1_4" },
        { component: Chart1_5, label: "Chart1_5" },
        { component: Chart1_6, label: "Chart1_6" },
        { component: Chart2_1, label: "Chart2_1" },
        { component: Chart2_2, label: "Chart2_2" },
        { component: Chart2_3, label: "Chart2_3" },
        { component: Chart2_4, label: "Chart2_4" },
        { component: Chart2_5, label: "Chart2_5" },
        { component: Chart2_6, label: "Chart2_6" },
        { component: Chart3_1, label: "Chart3_1" },
        { component: Chart3_2, label: "Chart3_2" },
        { component: Chart3_3, label: "Chart3_3" },
        { component: Chart3_4, label: "Chart3_4" },
        { component: Chart3_5, label: "Chart3_5" },
        { component: Chart3_6, label: "Chart3_6" },
    ];

    return (
        <div className='backpage'>
            <div className="container">
                <h2 className="heading">Estadísticas</h2>

                {/* Botones para mostrar gráficos */}
                <div className="row mt-4">
                    {charts.map((chart, index) => (
                        <div key={index} className="col-md-4 mb-3 text-center">
                            <button
                                type="button"
                                className="login-buttonesFAQ"
                                style={{ width: '80%' }}
                                onClick={() => handleShowChart(chart)}
                            >
                                {chart.label}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content container">
                                <div className="modal-header">
                                    <h5 className="modal-title">Gráfico: {activeChart?.label}</h5>
                                    <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                                </div>
                                <div className="modal-body d-flex justify-content-center">
                                    {activeChart && React.createElement(activeChart.component)}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardAdminSocioDem;
