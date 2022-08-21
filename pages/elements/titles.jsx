import React from 'react';
import Helmet from 'react-helmet';

import Breadcrumb from '~/components/features/breadcrumb';

import ElementsList from '~/components/partials/elements/elements-list';

function Titles() {
    return (
        <>
            <Helmet>
                <title>Riode React eCommerce Template | Titles</title>
            </Helmet>

            <h1 className="d-none">Riode React eCommerce Template - Titles</h1>

            <Breadcrumb subTitle="Elements" title="Element Titles" parentUrl="/elements" />

            <div className="page-content">
                <div className="container">
                    <section className="mt-10 pt-3">
                        <h2 className="title title-center">Default Style</h2>
                        <p className="text-center text-grey">Sed egestas, ante et vulputate volutpat, eros pede semper est,
                        vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                        gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
                        Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                            sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    </section>
                    <section className="mt-10 pt-2">
                        <h2 className="title title-simple">Simple</h2>
                        <p className="text-grey">Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.
                        Praesent id enim sit amet odio vulputate eleifend in in tortor. ellus massa, tristique sit
                        amet condim vel, facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate
                        eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis
                            sapien. Praesent id enim ent id enism sita.sis quis sapi.</p>
                    </section>
                    <section className="mt-10 pt-2">
                        <h2 className="title title-line">With Line</h2>
                        <p className="text-grey">Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.
                        Praesent id enim sit amet odio vulputate eleifend in in tortor. ellus massa, tristique sit
                        amet condim vel, facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate
                        eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis
                            sapien. Praesent id enim ent id enism sita.sis quis sapi.</p>
                    </section>
                    <section className="mt-10 pt-2">
                        <h2 className="title title-line title-underline"><span>Underline</span></h2>
                        <p className="text-grey">Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.
                        Praesent id enim sit amet odio vulputate eleifend in in tortor. ellus massa, tristique sit
                        amet condim vel, facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate
                        eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis
                            sapien. Praesent id enim ent id enism sita.sis quis sapi.</p>
                    </section>
                    <section className="mt-10 pt-2">
                        <h2 className="title title-icon title-center mb-3"><span>Title With Icon</span><i
                            className="fa fa-arrow-down"></i></h2>
                        <p className="text-center text-grey">Sed egestas, ante et vulputate volutpat, eros pede semper est,
                        vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                        gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
                        Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                            sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    </section>
                </div>

                <ElementsList adClass="mt-9" />
            </div>
        </>
    )
}

export default React.memo( Titles );