import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import data from '../../store/data.json'

export default function Body() {
    return (
        <div>
            <main id="main" class="site-main clr" role="main">
                <div data-elementor-type="wp-page" data-elementor-id="3486" class="elementor elementor-3486"
                    data-elementor-settings="[]">
                    <div class="elementor-inner">
                        <div class="elementor-section-wrap">
                            <Section1 />
                            <Section2 />
                            <Section3 />
                            <Section5 />
                            <Section4 data={data.doctor} />
                            <Section6 />
                            <Section7 />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
