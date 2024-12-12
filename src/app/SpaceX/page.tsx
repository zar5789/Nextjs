
import { Table } from 'antd';
import Appheader from '../Components/AppHeader';

interface RocketData {
    name: string;
    company: string;
    country: string;
    success_rate_pct: number;
    type: string;
    mass: {
        kg: number;
    };
    height: {
        meters: number;
    };
}


 const SpaceX = async () => {

    const query = `
        query Rockets {
            rockets {
                name
                company
                country
                success_rate_pct
                type
                mass {
                    kg
                }
                height {
                    meters
                }
            }
        }
    `;
    const response = await fetch('https://spacex-production.up.railway.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
        }),
      });
    
    const jsonResponse = await response.json();
    const Rockets: RocketData[] = jsonResponse.data.rockets.map((rocket: RocketData) => ({
        ...rocket,
        mass: rocket.mass.kg, 
        height: rocket.height.meters, 
      }));

    console.log(Rockets);

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
        },
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
        },
        {
          title: 'Success Rate (%)',
          dataIndex: 'success_rate_pct',
          key: 'success_rate_pct',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Mass (kg)',
          dataIndex: 'mass',
          key: 'mass',
           
        },
        {
          title: 'Height (m)',
          dataIndex: 'height',
          key: 'height',
        },
      ];
        

    
    return (
        <div>
            <div className='text-blue-500 font-extrabold text-2xl py-5'>SpaceX Rocket Data</div>
            <Table dataSource={Rockets} columns={columns} rowKey="name"></Table>
        </div>
    )
}

export default SpaceX