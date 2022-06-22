import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import Spinner from 'components/imported/misc/Spinner';

import { userService } from 'src/services';

export default function AccountValidateRedirect() {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [validToken, setValidToken] = useState(false)


    let queryparam = router.query.token

    const validateform = {token:queryparam}

    useEffect(() => {
        async function validate() {
            if (validateform.token) {
                console.log(validateform.token)
                try {
                    setIsLoading(true);
                    const { status, response } = await userService.validateAccount({ token : validateform.token });
                    setValidToken(true)
                    setIsLoading(false);
                    if (status === 400) {
                        setError(true);
                        setMessage(response.error.message);
                        console.log(message)
                        setValidToken(false)
                        router.push({
                            pathname: `/home`,
                            query: {valid:validToken},
                            asPath: `/home`,
                          })
                        }
                     else {
                        setError(false);
                        setMessage(response.message);
                        setValidToken(false)
                        router.push({
                            pathname: `/home`,
                            query: {valid:validToken},
                            asPath: `/home`,
                          })
                    }

                    /* setIsOpen(true); */
                    router.push({
                            pathname: `/home`,
                            query: {valid:validToken},
                            asPath: `/home`,
                          })

                } catch (e) {
                    setIsLoading(false);
                    console.log(e);
                }

            }
        }
        validate();
    }, [validateform.token]);

    return (
        <Spinner/>
    )

}