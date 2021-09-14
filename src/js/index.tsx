import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '0 auto',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    avator: {
        width: `${window.innerHeight * 0.3}px`,
        height: `${window.innerHeight * 0.3}px`,
        marginTop: "5%",
        marginLeft: "30%",
    },
    card: {
        width: `${window.innerWidth * 0.5}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    cardContent: {
        marginLeft: "18%"
    },
    bottomMargin: {
        marginBottom: "10px"
    },
    stepLabel: {
        fontWeight: "bold",
        fontSize: "1.2em"
    }
}));

function getSteps() {
    return ['Introduce', 'Project', 'From now on'];
}

function getStepContent(step: number) {

    const classes = useStyles();
    switch (step) {
        case 0:
            return (
                <Card className={classes.card}>
                    <CardActionArea>
                        <Avatar className={classes.avator} />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h6">
                                {`名前      : 川村 大暉`}
                            </Typography>
                            <Typography variant="h6">
                                {`誕生日    : 1996年10月11日(24歳)`}
                            </Typography>
                            <Typography variant="h6">
                                {`最終学歴  : 豊田工業高等専門学校情報工学科中退`}
                            </Typography>
                            <Typography variant="h6">
                                {`得意スキル: React(実務1年),C#(実務2年|経験3年)`}
                            </Typography>
                            <Typography variant="h6">
                                {`趣味: 音楽鑑賞、ショッピング`}
                            </Typography>
                            <br />
                            <Typography variant="caption">
                                学生時代は組込系,社会人になってからはフロントエンジニアとして経験を積んできました。<br />
                                現在はKintoneのカスタマイズを中心に業務を行っています。<br />
                                また、応用情報処理技術者試験に挑戦中です。
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            );
        case 1:
            return (
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h4">
                                主なプロジェクト
                            </Typography>
                            <Typography variant="h6">
                                ・生産管理システム
                            </Typography>
                            <Typography variant="caption">
                                C#, .NETFramework<br />
                            </Typography>
                            <Typography variant="caption" className={classes.bottomMargin}>
                                詳細設計～テスト工程を担当。改修が主でした。
                            </Typography>
                            <Typography variant="h6">
                                ・設備点検システム
                            </Typography>
                            <Typography variant="caption">
                                C#, ASP.NET JavaScript<br />
                            </Typography>
                            <Typography variant="caption" className={classes.bottomMargin}>
                                基本設計～導入を担当。3人月。一貫して開発しました。
                            </Typography>
                            <Typography variant="h6">
                                ・税理士法人基幹システム
                            </Typography>
                            <Typography variant="caption">
                                TypeScript,Kintone<br />
                            </Typography>
                            <Typography variant="caption" className={classes.bottomMargin}>
                                すでに導入されている顧客や作業進捗、予実を管理するシステムの受託開発<br />
                                普段は既存システムの改修を行い、不定期に新規システムの導入も行っています。<br />
                                基本的には要件定義～導入までを1人で行っています。
                            </Typography>
                            <Typography variant="h6">
                                ・Kintoneプラグイン開発
                            </Typography>
                            <Typography variant="caption">
                                JavaScript,TypeScript,React,Kintone,Vue<br />
                            </Typography>
                            <Typography variant="caption" className={classes.bottomMargin}>
                                Kintoneのプラグインの開発を自社や受託で担当しています。<br />
                                提案からテストまで、一貫して担当しています。<br />
                                外部サービス(LINE WORKS等)との連携を実現します。
                            </Typography>
                            <Typography variant="h6">
                                ・SMSチャットシステム
                            </Typography>
                            <Typography variant="caption">
                                JavaScript,React,Kintone<br />
                            </Typography>
                            <Typography variant="caption" className={classes.bottomMargin}>
                                Kintoneの画面で外部サービス(API)を利用してLINEライクな<br />
                                チャットシステムを構築しました。<br />
                                基本設計からテストまでを担当しました。
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            );
        case 2:
            return (
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5">
                                5年後にはPL業務を担当できるようになりたい。
                            </Typography>
                            <Typography variant="caption">
                                プレイングマネージャとして活躍することを目標としています
                            </Typography>
                            <br />
                            <Typography variant="subtitle1">
                                これからも新しい技術に貪欲に。<br />
                                かつ、最適な提案ができるようにしていきます。
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            );
        default:
            return 'Unknown step';
    }
}

const App: React.FC = () => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel className={classes.stepLabel}>{label}</StepLabel>
                            <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </div>
            {activeStep === steps.length && (<div className={classes.root}>
                
            </div>
            )}
        </React.Fragment>
    );
}

window.onload = () => {
    'use strict';

    ReactDOM.render(
        <App />,
        document.getElementById("indexRoot")
    );
}

