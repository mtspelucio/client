import styled from 'styled-components';

export const Container = styled.div`
    width: 24rem;
    height: 16rem;
    border-radius: 10px;
    border: 2px solid var(--gray-100);
    box-shadow: 0 0 10px var(--gray-100);
    overflow: hidden;
    position: relative;
    cursor: pointer;

    img{
        width: 24rem;
        object-fit: contain;
    }

    section{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 8rem;
        background: var(--white);
        display: flex;
        justify-content: end;

        .icon{
            background: var(--white);
            width: 5rem;
            height: 5rem;
            border-radius: 100%;
            border: 2px solid var(--gray-100);
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 1.2rem;
            bottom: 5rem;

            img{
                width: 4rem;
                object-fit: contain;
            }
        }

        .details{
            width: 18rem;
            height: 8rem;
            padding: 1rem;
            color: var(--gray-200);
            position: relative;
            
            p{
                display: -webkit-box;
                -webkit-line-clamp: 3;
                overflow: hidden;
                -webkit-box-orient: vertical;
            }

            p:first-child{
                font-weight: bold;
            }
            .info{
                padding-top: 1rem;
                display: flex;
                gap: 1rem;
                position: absolute;
                bottom: 1rem;
                
                div{
                    display: flex;
                    justify-content: center;
                    gap: .2rem;

                    img{
                        width: 1rem;
                        object-fit: contain;
                    }
                }
            }
        }
    }
`;
