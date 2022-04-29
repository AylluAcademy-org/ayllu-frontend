import React from 'react';
import Link from 'next/link';

const Courses = () => {
    return (
        <div className="profile-quizzes pb-70">
            <h3 className="title">Historial de cursos</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre de curso</th>
                            <th>Instructor</th>
                            <th>Progress</th>
                            <th>Rewards</th>
                            <th>Certificado</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Fundamentos de blockchain</a>
                                </Link>
                            </td>
                            <td>Carlos Pérez</td>
                            <td><span className="progress pending">En Progreso</span></td>
                            <td>0 AYLLU</td>
                            <td><button type="button" class="btn btn-secondary btn-sm">Descargar certificado</button>
</td>
                            
                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Haskell con sabor a Plutus</a>
                                </Link>
                            </td>
                            <td>Carlos Pérez</td>
                            <td><span className="progress pending">En Progreso</span></td>
                            <td>0 AYLLU</td>
                            <td><button type="button" class="btn btn-secondary btn-sm">Descargar certificado</button>
</td> 
                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Plutus para principiantes</a>
                                </Link>
                            </td>
                            <td>Carlos Pérez</td>
                            <td><span className="progress completed">Completado</span></td>
                            <td>15 AYLLU</td>
                            <td><button type="button" class="btn btn-primary btn-sm">Descargar certificado</button></td>

                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Introducción a Scala</a>
                                </Link>
                            </td>
                            <td>Carlos Pérez</td>
                            <td><span className="progress completed">Completado</span></td>
                            <td>15 AYLLU</td>
                            <td><button type="button" class="btn btn-primary btn-sm">Descargar certificado</button></td>


                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    <a>Despleguando smart contracts con CARDANO</a>
                                </Link>
                            </td>
                            <td>Carlos Pérez</td>
                            <td><span className="progress completed">Completado</span></td>
                            <td>15 AYLLU</td>
                            <td><button type="button" class="btn btn-primary btn-sm">Descargar certificado</button></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Courses;