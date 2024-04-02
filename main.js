const l = (0, n(1).Nh)(a.W, (e => {
        let {
            bookingID: t
        } = e;
        return `/bookings/${t}`
    })),
    d = {
        getJobBookingDetails(e) {
            let {
                bookingID: t,
                apiContext: n
            } = e;
            return l({
                apiContext: n,
                method: "get",
                pathParams: {
                    bookingUuid: t
                }
            }).then((e => {
                let {
                    data: t
                } = e;
                return {
                    data: (0, r.h)(t.toJS())
                }
            }))
        }
    }


    await go.x1.patch(`endpoint/api/v3/${o}/jobs/${n}/messages/${t}`, {
text: i,
attachments: r}
