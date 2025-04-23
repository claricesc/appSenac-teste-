import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const dicas = [
    {
        id: '1',
        nome: 'teste',
        cor: '#FFF',
        descricao: 'teste'
    }
]
const cursos = [
    {
        id: '1',
        nome: 'Qual o melhor momento para um estudante buscar um estágio?',
        cor: '#FFF',
        descricao: 'Para o primeiro estágio, o ideal é buscar a partir do primeiro ou segundo ano da graduação, quando já há uma base teórica para aplicar.'
    },
    {
        id: '2',
        nome: 'Como posso melhorar meu currículo para me destacar?',
        cor: '#FFF',
        descricao: 'Para melhorar seu currículo e se destacar, invista em experiências extracurriculares, como estágios, cursos complementares e voluntariado. Além disso, destacar habilidades interpessoais, idiomas e o uso de ferramentas específicas da área de interesse também é essencial.'
    },
    {
        id: '3',
        nome: 'Como se preparar para uma entrevista de estágio?',
        cor: '#FFF',
        descricao: 'Pesquise sobre a empresa, revise seu currículo e prepare-se para responder perguntas comuns em entrevistas. Pratique suas respostas em voz alta e esteja pronto para falar sobre suas experiências e habilidades.'
    },
    {
        id: '4',
        nome: 'Como se comportar no ambiente de trabalho?',
        cor: '#FFF',
        descricao: 'No ambiente de trabalho, é importante ser pontual, respeitar os colegas, manter uma postura profissional e estar aberto a feedbacks. Além disso, demonstre interesse e proatividade nas atividades.'
    },
    {
        id: '5',
        nome: 'Como posso melhorar meu currículo para me destacar?',
        cor: '#FFF',
        descricao: 'O estágio ajuda a desenvolver habilidades como comunicação, trabalho em equipe, gestão de tempo, resolução de problemas e adaptação ao ambiente de trabalho.'
    },
    {
        id: '6',
        nome: 'Como se destacar em um processo seletivo de estágio?',
        cor: '#FFF',
        descricao: 'Para se destacar em um processo seletivo de estágio, é importante ter um currículo bem elaborado, se preparar para as entrevistas, demonstrar interesse pela empresa e pela vaga, e mostrar suas habilidades e experiências relevantes.'
    },
];

const CursoCard = ({ curso }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <TouchableOpacity style={styles.card} onPress={toggleDescription}>
            <Text style={styles.texto}>{curso.nome}</Text>
            {isExpanded && (
                <Text style={styles.descricao}>{curso.descricao}</Text>
            )}
        </TouchableOpacity>
    );
};

export default function Dicas() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Image
                    source={require('../assets/estagio.png')}
                    style={styles.banner}
                    resizeMode="cover"
                />

                <Text style={styles.curso2}>
                    Fique por dentro de muitas notícias e dicas que permeiam o universo dos estudantes, estagiários e empresários
                </Text>

                <ScrollView horizontal>
                    <View>
                        <FlatList
                            data={cursos}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}

                            renderItem={({ item }) => (
                                <View style={{ marginLeft: 16 }}>
                                    <CursoCard curso={item} />
                                </View>)}
                            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        />
                    </View>
                </ScrollView>

                <Image source={require('../assets/vpv2.png')} style={styles.pvp} />

                <View style={styles.descricaoContainer}>
                    <Text style={styles.titulo}>Propósito</Text>
                    <Text style={styles.descricao2}>Proporcionar conexões entre
                        empresas e pessoas, gerando mais
                        prosperidade, qualidade de vida e
                        felicidade, por meio de
                        oportunidade no mercado de
                        trabalho com verdadeiros
                        talentos aos nossos parceiros.</Text>

                    <Text style={styles.titulo}>Visão</Text>
                    <Text style={styles.descricao2}>Impulsionar o crescimento
                        das empresas com verdadeiros talentos,
                        tornando-as mais lucrativas, sólidas e humanizadas,
                        proporcionanando a melhor experiência aos clientes e
                        aos canditatos</Text>

                    <Text style={styles.titulo}>Valores</Text>
                    <Text style={styles.descricao2}>
                        Empatia, responsabilidade e desenvolvimento.
                        Acreditamos que relações sólidas se constroem com
                        respeito, confiança e compromisso. Valorizamos o
                        crescimento conjunto entre empresas e talentos,
                        promovendo oportunidades com ética, inclusão e propósito.
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
    card: {
        alignSelf: 'center',
        width: 300,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#FFF',
        borderColor: '#0b4a76',
        borderWidth: 5,
        marginBottom: 15,
    },
    texto: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    descricao: {
        marginTop: 10,
        fontSize: 12,
        color: '#333',
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    descricaoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    descricao2: {
        color: '#000000',
        fontSize: 16,
        marginTop: 20,
        lineHeight: 24,
        textAlign: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    curso2: {
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#04457d',
    },
    curso3: {
        marginTop: 20,

        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00000',
    },
    banner: {
        marginTop: -20,
        width: '100%',
        height: 220,
        marginBottom: 20,
        alignSelf: 'stretch',
    },
    titulo: {
        color: '#005CAA',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        paddingHorizontal: 10,
    },
    pvp: {
        width: '90%',          
        height:70,            // Altura fixa (pode ajustar conforme sua imagem)
        resizeMode: 'contain',  // Garante que a imagem não fique esticada
        alignSelf: 'center',    // Centraliza horizontalmente
        marginTop: 30,          // Espaçamento superior
        marginBottom:20,       // Espaçamento inferior
    
      },
      
});
