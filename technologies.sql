DROP DATABASE IF EXISTS technology;
CREATE DATABASE technology;

\c technology;

CREATE TABLE technology (
  ID SERIAL PRIMARY KEY,
  technname VARCHAR,
  technouid VARCHAR,
  technoversion VARCHAR,
  technonameiconurl VARCHAR
);

DROP DATABASE IF EXISTS qualityrule;
CREATE DATABASE qualityrule;

\c qualityrule;

CREATE TABLE qualityrule (
  ID SERIAL PRIMARY KEY,
  qrmetricid VARCHAR,
  qrtechnicalcriteriaid VARCHAR,
  qrname_en VARCHAR,
  qrdescription_en VARCHAR,
  qroutput_en VARCHAR,
  qrrationale_en VARCHAR,
  qrremediation_en VARCHAR,
  qrremediationsample_en VARCHAR,
  qrtotal_en VARCHAR,
  qrcisq_en VARCHAR,
  qrowasp VARCHAR,
  qrcwe VARCHAR,
  qrother VARCHAR,
  qrcritical INTEGER,
  qrweight INTEGER
);

DROP DATABASE IF EXISTS technologytoqualityrule;
CREATE DATABASE technologytoqualityrule;


\c technologytoqualityrule;

CREATE TABLE technologytoqualityrule (
  ID SERIAL PRIMARY KEY,
  technologyid VARCHAR,
  qualityruleid VARCHAR
);

DROP DATABASE IF EXISTS technicalcriteria;
CREATE DATABASE technicalcriteria;

\c technicalcriteria;

CREATE TABLE technicalcriteria (
  ID SERIAL PRIMARY KEY,
  tcmetricid VARCHAR,
  tcname VARCHAR
);

DROP DATABASE IF EXISTS technicalcriteriatoqualityrule;
CREATE DATABASE technicalcriteriatoqualityrule;

\c technicalcriteriatoqualityrule;

CREATE TABLE technicalcriteriatoqualityrule (
  ID SERIAL PRIMARY KEY,
  qualityruleid VARCHAR,
  tcmetricid VARCHAR
);

