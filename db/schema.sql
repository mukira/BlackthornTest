--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

-- Started on 2019-08-15 08:12:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16405)
-- Name: cart; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    subtotal integer NOT NULL,
    discount integer,
    total integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 199 (class 1259 OID 16428)
-- Name: cart_products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cart_product (
    id integer NOT NULL,
    product_id integer NOT NULL,
    cart_id integer NOT NULL
);


--
-- TOC entry 198 (class 1259 OID 16410)
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    sale_price integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 196 (class 1259 OID 16394)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user (
    id smallint NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- TOC entry 2709 (class 2606 OID 16432)
-- Name: cart_products cart_products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cart_product
    ADD CONSTRAINT cart_products_pkey PRIMARY KEY (id);


--
-- TOC entry 2705 (class 2606 OID 16422)
-- Name: cart id; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT id PRIMARY KEY (id);


--
-- TOC entry 2707 (class 2606 OID 16418)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 2701 (class 2606 OID 16401)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2703 (class 2606 OID 16444)
-- Name: users users_un; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user
    ADD CONSTRAINT users_un UNIQUE (email);


--
-- TOC entry 2711 (class 2606 OID 16433)
-- Name: cart_products cart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cart_product
    ADD CONSTRAINT cart_id_fkey FOREIGN KEY (cart_id) REFERENCES public.cart(id) MATCH FULL;


--
-- TOC entry 2712 (class 2606 OID 16438)
-- Name: cart_products product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cart_product
    ADD CONSTRAINT product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) MATCH FULL;


--
-- TOC entry 2710 (class 2606 OID 16423)
-- Name: cart user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT user_id_fkey FOREIGN KEY (user_id) REFERENCES public.user(id);


-- Completed on 2019-08-15 08:12:17

--
-- PostgreSQL database dump complete
--

